from django.urls import path, include
from .views import get_account, get_positions, create_order, order_history, market_data


urlpatterns = [
    path('account/', get_account),
    path('positions/', get_positions),
    path('create_order/', create_order),
    path('order_history/', order_history),
    path('market_data', market_data)
]
