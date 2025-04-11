import mysql.connector
from mysql.connector import Error
import json

class ingesterToDatabase:
    def __init__(self, db_host="database", db_user="root", db_password="pwd", db_name="template_db"):

        try:
            self.conn = mysql.connector.connect(
                host=db_host,
                user=db_user,
                password=db_password,
                database=db_name
            )
            if self.conn.is_connected():
                print("Successfully connected to the database")
            else:
                print(" MySQL connection failed for an unknown reason.")
            self.cursor = self.conn.cursor()
        except Error as e:
            print(f"Error connecting to MySQL: {e}")
            self.conn = None
    
    def close_connection(self):
        if self.conn is not None:
            self.cursor.close()
            self.conn.close()
            self.conn = None

    def stream_json(self, file_path):
        """Generator to read JSON file line by line."""
        with open(file_path, "r", encoding="utf-8") as file:
            for line in file:
                try:
                    yield json.loads(line)  # Parse line-by-line
                except json.JSONDecodeError:
                    continue  # Skip invalid lines

    def update_unemployment_table(self, file_path, batch_size=5000):
        insert_query = """
        INSERT INTO unemployment_data (city, labour_status, surv_month, employment_sector)
        VALUES (%s, %s, %s, %s)
        """

        values = []
        for item in self.stream_json(file_path):
            try:
                values.append((
                    item.get("CMA"), 
                    item.get("LFSSTAT"), 
                    item.get("SURVMNTH"), 
                    int(item["NAICS_21"]) if item["NAICS_21"] and item["NAICS_21"].isdigit() else None
                ))
            except KeyError:
                continue  # Skip if missing required fields

            # Insert in batches of `batch_size`
            if len(values) >= batch_size:
                self.cursor.executemany(insert_query, values)
                self.conn.commit()
                print(f"Inserted {len(values)} rows")
                values = []  # Reset batch

        # Insert remaining rows
        if values:
            self.cursor.executemany(insert_query, values)
            self.conn.commit()
            print(f"Inserted final {len(values)} rows")

        print("Unemployment data insertion complete.")

    def update_housing_table(self, file_path, batch_size=5000):
            insert_query = """
            INSERT INTO housing_data (city, age, surv_month)
            VALUES (%s, %s, %s)
            """

            values = []
            for item in self.stream_json(file_path):
                try:
                    values.append((
                        item["CMA"], 
                        item["AGE_12"], 
                        item["SURVMNTH"], 
                    ))
                except KeyError:
                    continue  # Skip if missing required fields

                # Insert in batches of `batch_size`
                if len(values) >= batch_size:
                    self.cursor.executemany(insert_query, values)
                    self.conn.commit()
                    print(f"Inserted {len(values)} rows")
                    values = []  # Reset batch

            # Insert remaining rows
            if values:
                self.cursor.executemany(insert_query, values)
                self.conn.commit()
                print(f"Inserted final {len(values)} rows")

            print("Housing data insertion complete.")

    def update_database(self, insert_query, values):
        if self.conn is None:
            print("No database connection")
            return
        
        try:
            self.cursor.executemany(insert_query, values)
            self.conn.commit()
            print("Data inserted successfully")
        except Error as e:
            print(f"Error inserting data: {e}")
            self.conn.rollback()


    def fetch_all_records(self):
        if self.conn is None:
            print("No database connection")
            return

        try:
            self.cursor.execute("SELECT * FROM unemployment_data;")
            rows = self.cursor.fetchall()
            for row in rows:
                print(row)
        except Error as e:
            print(f"Error fetching data: {e}")
