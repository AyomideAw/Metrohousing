import pytest
from unittest.mock import patch, Mock
from IngesterCalls import DataIngester

@pytest.fixture
def ingester():
    api_key = "qtjZ9mbTucjXNOgX7mGbV-zhbzhn0SYMiiMyIzZTIQmM0WwBIEs7kA"
    return DataIngester(api_key)

@patch("IngesterCalls.requests.get")
def test_get_root(mock_get, ingester):
    mock_get.return_value = Mock(status_code=200, json=lambda: {"CIS Data Service": "Ver 1.0"})
    
    response = ingester.get_root()
    
    assert response == {"CIS Data Service": "Ver 1.0"}
    mock_get.assert_called_with("https://cis-data-service.socs.uoguelph.ca/", headers={"Apikey": ingester.api_key})

@patch("IngesterCalls.requests.get")
def test_get_table_list(mock_get, ingester):
    mock_get.return_value = Mock(status_code=200, json=lambda: {"tables": [
        "apartment_completions",
        "apartment_starts",
        "housing_starts_completions",
        "housing_under_construction",
        "labour_data_descriptors",
        "labour_market",
        "tasks"
    ]})

    response = ingester.get_table_list()

    assert response == {"tables": [
        "apartment_completions", "apartment_starts", "housing_starts_completions",
        "housing_under_construction", "labour_data_descriptors", "labour_market", "tasks"
    ]}

    mock_get.assert_called_with("https://cis-data-service.socs.uoguelph.ca/data/", headers={"Apikey": ingester.api_key})
