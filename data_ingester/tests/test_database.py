import pytest
from unittest.mock import patch, MagicMock
from database import ingesterToDatabase

@pytest.fixture
def mock_db():
    """Fixture to create a mock database connection."""
    with patch("mysql.connector.connect") as mock_connect:
        mock_conn = MagicMock()
        mock_cursor = MagicMock()

        mock_connect.return_value = mock_conn
        mock_conn.cursor.return_value = mock_cursor

        db = ingesterToDatabase()
        yield db  # Provide the mock instance to the test

@patch.object(ingesterToDatabase, "stream_json")
def test_update_unemployment_table(mock_stream_json, mock_db):
    """Test inserting data into the unemployment table with mocked data."""
    mock_stream_json.return_value = [
        {"CMA": "4", "LFSSTAT": "4", "SURVMNTH": "10", "NAICS_21": "16"},
        {"CMA": "5", "LFSSTAT": "1", "SURVMNTH": "11", "NAICS_21": "6"},
    ]

    mock_db.update_unemployment_table("mock_file.json")

    # Assert that `executemany` was called with expected values
    expected_values = [
        ("4", "4", '10', 16),
        ("5", "1", "11", 6),
    ]
    mock_db.cursor.executemany.assert_called_once_with(
        """
        INSERT INTO unemployment_data (city, labour_status, surv_month, employment_sector)
        VALUES (%s, %s, %s, %s)
        """,
        expected_values
    )

    mock_db.conn.commit.assert_called_once()

@patch.object(ingesterToDatabase, "stream_json")
def test_update_housing_table(mock_stream_json, mock_db):
    """Test inserting data into the housing table with mocked data."""
    mock_stream_json.return_value = [
        {"CMA": "4", "AGE_12": "5", "SURVMNTH": "10"},
        {"CMA": "5", "AGE_12": "8", "SURVMNTH": "11"},
    ]

    mock_db.update_housing_table("mock_file.json")

    # Assert that `executemany` was called with expected values
    expected_values = [
        ("4", "5", "10"),
        ("5", "8", "11"),
    ]
    mock_db.cursor.executemany.assert_called_once_with(
        """
        INSERT INTO housing_data (city, age, surv_month)
        VALUES (%s, %s, %s)
        """,
        expected_values
    )

    mock_db.conn.commit.assert_called_once()

def test_close_connection(mock_db):
    """Test if database connection closes properly."""
    mock_db.close_connection()
    
    mock_db.cursor.close.assert_called_once()
    mock_db.conn.close.assert_called_once()
