import pytest
from flask import Flask, jsonify, json
from unittest.mock import patch, MagicMock
from firebase_admin import auth
import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'Services')))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app')))
from app import app

@pytest.fixture
def client():
    """Fixture to create a test client for the Flask application."""
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_login_missing_id_token(client):
    # Mock request data with missing idToken
    mock_request_data = {}
    
    # Make POST request to /login endpoint
    response = client.post('/login', data=json.dumps(mock_request_data), content_type='application/json')
    
    # Assert response status code
    assert response.status_code == 400
    
    # Assert response content if it exists
    if response.data:
        assert json.loads(response.data) == {'error': 'ID token is missing'}
    else:
        assert False, "Response data is None"

def test_login_invalid_id_token(client):
    # Mock request data with invalid idToken
    mock_request_data = {'idToken': 'invalid_token'}
    
    # Mocking verify_id_token to raise an exception
    with patch('firebase_admin.auth.verify_id_token', side_effect=Exception('Invalid token')):
        # Make POST request to /login endpoint
        response = client.post('/login', data=json.dumps(mock_request_data), content_type='application/json')
        
        # Assert response status code
        assert response.status_code == 401
        
        # Assert response content if it exists
        if response.data:
            assert json.loads(response.data) == {'error': 'Invalid token'}
        else:
            assert False, "Response data is None"

if __name__ == "__main__":
    pytest.main()

