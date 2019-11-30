from flask import Flask
from flask_cors import CORS
import requests
import json
app = Flask(__name__)


# Set CORS
cors = CORS(app, resources={
    r"/*": {"origin": "*"}
})


@app.route('/search/<carrier_code>/<delivery_number>', methods=['GET'])
def delivery_search(carrier_code, delivery_number):
    request_url = 'https://apis.tracker.delivery/carriers/' + carrier_code + '/tracks/' + delivery_number
    response = requests.get(request_url).json()

    print(response)
    print(response['from'])
    print(response['to'])
    print(response['state'])

    for i in range(len(response['progresses'])):
        print(response['progresses'][i])

    return 'hi'


if __name__ == '__main__':
    app.run()
