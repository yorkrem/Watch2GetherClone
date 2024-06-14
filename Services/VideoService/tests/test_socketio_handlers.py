from unittest.mock import patch
import sys
import os

# Ensure the app directory is in the Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app')))

from socketio_handlers import on_join, on_leave, handle_videointeraction, handle_message

class TestSocketIOHandlers:

    @patch('socketio_handlers.join_room')
    def test_on_join(self, mock_join_room):
        data = {'room': 'test_room'}
        on_join(data)
        mock_join_room.assert_called_with('test_room')

    @patch('socketio_handlers.leave_room')
    def test_on_leave(self, mock_leave_room):
        data = {'room': 'test_room'}
        on_leave(data)
        mock_leave_room.assert_called_with('test_room')

    @patch('socketio_handlers.socketio.emit')
    def test_handle_videointeraction_play(self, mock_emit):
        data = {'event': 'play', 'time': '10:00', 'room': 'test_room'}
        handle_videointeraction(data)
        interactiondata = {'event': 'play', 'time': '10:00'}
        mock_emit.assert_called_with('interactionlistener', interactiondata, room='test_room', broadcast=True)

    @patch('socketio_handlers.socketio.emit')
    def test_handle_videointeraction_pause(self, mock_emit):
        data = {'event': 'pause', 'time': '10:00', 'room': 'test_room'}
        handle_videointeraction(data)
        interactiondata = {'event': 'pause', 'time': '10:00'}
        mock_emit.assert_called_with('interactionlistener', interactiondata, room='test_room', broadcast=True)

    @patch('socketio_handlers.socketio.emit')
    def test_handle_message(self, mock_emit):
        data = {'room': 'test_room', 'msg': 'Hello, world!', 'username': 'test_user'}
        handle_message(data)
        newMessage = {'message': 'Hello, world!', 'username': 'test_user'}
        mock_emit.assert_called_with('chatlistener', newMessage, room='test_room', broadcast=True)
