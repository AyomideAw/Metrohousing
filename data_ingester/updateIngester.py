from database import ingesterToDatabase

# new database talking object
speaker = ingesterToDatabase()

# update ingester
speaker.update_unemployment_table("data_ingester/output/labour_market_output.json")
speaker.update_housing_table("data_ingester/output/housing_starts_completions_output.json")

speaker.close_connection()