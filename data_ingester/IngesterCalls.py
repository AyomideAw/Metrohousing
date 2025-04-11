import requests
import json
from datetime import date
import time

class DataIngester:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://cis-data-service.socs.uoguelph.ca/"


    def format_json(self, raw_response):
        try:
            return json.dumps(raw_response, indent=3, default=str)  # Use `default=str` to handle non-serializable types
        except (TypeError, ValueError) as e:
            return f"Error formatting JSON: {e}"

    # root of api, does nothing
    def get_root(self):
        return self._get_request("")

    # Get the list of available tables.
    def get_table_list(self):
        return self._get_request("data/")

    # Get data from a specific table // that has been updated since a specified date
    def get_data(self, table, period=None, date=None):
        if date:
            date_filter = f"?{period}={date}"
            return self._get_request(f"data/{table}{date_filter}", table)
        
        return self._get_request(f"data/{table}", table)
    

    def _get_request(self, request, table):
        offset = 0

        startTime = time.time() 
        try:
            response = requests.get(
                self.base_url + request + f"?offset={offset}",
                headers={"Apikey": self.api_key},
                verify=False
            )
            with open(f"data_ingester/output/{table}_output.json", "a+", encoding="utf-8") as outfile:
                while len(response.json())!=0:
                    if response.status_code == 200:
                        json.dump(response.json(), outfile, indent=4)
                        print(f"Dumped {len(response.json())} records with offset={offset}, Elapsed time: {time.time()-startTime}")
                        offset = offset+5000
                    else:
                        print(f"Failed to fetch data. Status code: {response.status_code}, Response: {response.text}")
                    response = requests.get(
                        self.base_url + request + f"?offset={offset}",
                        headers={"Apikey": self.api_key},
                        verify=False
                    )

        except requests.exceptions.RequestException as e:
            print(f"An error occurred: {e}")

        print(f"Total Elapsed Time: {time.time()-startTime}")


    # def judis_phone(self):
    #     test_table = "tasks"
    #     base_url = "https://cis-data-service.socs.uoguelph.ca/data"
    #     offset = 0

    #     startTime = time.time() 
    #     response=requests.get(f"{base_url}/{test_table}?offset={offset}", headers={"Apikey": self.api_key}, verify=False)

    #     with open(f"{test_table}_output.json", "a+", encoding="utf-8") as outfile:
    #         while True:
    #             response = requests.get(f"{base_url}/{test_table}?offset={offset}", headers={"Apikey": self.api_key})
    #             if response.status_code != 200 or not response.text.strip():
    #                 print(f"Failed to fetch data. Status code: {response.status_code}, response: {response.text}")
    #                 break

    #             data = response.json()
    #             if not data:
    #                 break

    #             json.dump(data, outfile, indent=4)
    #             print(f"Dumped {len(data)} records with offset={offset}, Elapsed time: {time.time()-startTime}")
    #             offset += 5000

    #     print(f"Total Elapsed Time: {time.time()-startTime}")