import pytest
from unittest.mock import MagicMock, patch
import sys
import os

# Add the path to 'app' directory to Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', "Services")))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app')))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app', 'managers')))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app', 'objects')))

from RoomManager import RoomManager  # Adjusted import path
from Room import Room

@pytest.fixture
def mock_rcache():
    """Fixture to mock rcache."""
    mock = MagicMock()
    with patch('RoomManager.rcache', mock):
        yield mock

def test_add_room(mock_rcache):
    room_manager = RoomManager()
    room = Room('room1', 'video1')
    
    # Mocking rcache.hset
    mock_rcache.hset.return_value = None
    
    room_manager.addRoom(room)
    
    # Assert that rcache.hset was called with the correct arguments
    mock_rcache.hset.assert_called_once_with('room1', mapping={'roomId': 'room1', 'currentVideo': 'video1'})

def test_get_room_existing(mock_rcache):
    room_manager = RoomManager()
    mock_rcache.hgetall.return_value = {'roomId': 'room1', 'currentVideo': 'video1'}
    
    result = room_manager.getRoom('room1')
    
    assert result == {'roomId': 'room1', 'currentVideo': 'video1'}

def test_get_room_not_found(mock_rcache):
    room_manager = RoomManager()
    mock_rcache.hgetall.return_value = None
    
    result = room_manager.getRoom('room1')
    
    assert result is None

def test_update_room_existing(mock_rcache):
    room_manager = RoomManager()
    mock_rcache.hgetall.return_value = {'roomId': 'room1', 'currentVideo': 'video1'}
    
    room_manager.updateRoom('room1', 'new_video')
    
    mock_rcache.hset.assert_called_once_with('room1', mapping={'roomId': 'room1', 'currentVideo': 'new_video'})

def test_update_room_not_found(mock_rcache):
    room_manager = RoomManager()
    mock_rcache.hgetall.return_value = None
    
    room_manager.updateRoom('room1', 'new_video')
    
    assert mock_rcache.hset.call_count == 0

if __name__ == "__main__":
    pytest.main()