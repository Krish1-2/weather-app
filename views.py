from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
import urllib.request
import json
# Create your views here.

class ReactView(APIView):
	
	serializer_class = ReactSerializer

	def get(self, request):
		detail = [ {"email": detail.email,"city": detail.city}
		for detail in React.objects.all()]
		print(detail[len(detail)-1]['city'])
		source=urllib.request.urlopen('https://api.openweathermap.org/data/2.5/weather?q='+detail[len(detail)-1]['city']+'&units=metric&appid=1897c6344f7ee010b5b5b41ef7291a11').read()
		print(source)
		list_of_data = json.loads(source)
		data = {
            	"country_code": str(list_of_data['sys']['country']),
            	"coordinate": str(list_of_data['coord']['lon']) + ', '
            	+ str(list_of_data['coord']['lat']),
            	"temp": str(list_of_data['main']['temp']) + ' °C',
            	"pressure": str(list_of_data['main']['pressure']),
            	"humidity": str(list_of_data['main']['humidity']),
            	'main': str(list_of_data['weather'][0]['main']),
            	'description': str(list_of_data['weather'][0]['description']),
            	'icon': list_of_data['weather'][0]['icon'],
        }
        	
		print(data)
		return Response(data)

	def post(self, request):

		serializer = ReactSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			# print(serializer.data)
			city=serializer['city']
			return Response(serializer.data)
