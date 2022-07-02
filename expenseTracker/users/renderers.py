from rest_framework import renderers
import json

class UserRenderer(renderers.JSONRenderer):
    charset = 'utf-8'
    def render(self, data, accepted_media_type=None, renderer_context=None):
        resp = ''
        if 'ErrorDetail' in str(data):
            if 'token' in str(data):
                resp = json.dumps({'errors':'token expired'})
            resp = json.dumps({'errors':data})
        else:
            resp = json.dumps(data)
        return resp