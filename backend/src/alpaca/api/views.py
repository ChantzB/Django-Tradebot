from django.shortcuts import render
import requests, json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .keys import *


@api_view()

def hello_world(request):
    BASE_URL = 'https://paper-api.alpaca.markets'
    ACCOUNT_URL = '{}/v2/account'.format(BASE_URL)
    HEADERS = {"APCA-API-KEY-ID" : API_KEY, "APCA-API-SECRET-KEY" : SECRET_KEY}

    r = requests.get(ACCOUNT_URL, headers=HEADERS)
    info = json.loads(r.content)


    return Response(info)

