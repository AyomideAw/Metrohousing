from IngesterCalls import DataIngester
# import copy 

apiKey = "qtjZ9mbTucjXNOgX7mGbV-zhbzhn0SYMiiMyIzZTIQmM0WwBIEs7kA"

# new ingestor object
ingester = DataIngester(apiKey)

# get data for new employment graphs
ingester.get_data("labour_market")
ingester.get_data("housing_starts_completions")
