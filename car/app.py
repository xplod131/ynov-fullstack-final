from flask import Flask, request, redirect, url_for, jsonify
from flask_migrate import Migrate

from models import db, CarModel

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:123456789@db:3306/tp-api"
db.init_app(app)
migrate = Migrate(app, db)


@app.before_first_request
def create_table():
    db.create_all()


@app.route('/')
def index():
    cars = CarModel.query.all()
    cars_data = []
    for car in cars:
        car_data = {'id': car.id, 'name': car.name, 'price': car.price, 'image': car.image}
        cars_data.append(car_data)
    return jsonify({'status': 'success', 'car': (cars_data)}), 200


@app.route('/add', methods=['POST'])
def add():
    # Ajoute une nouvelle voiture
    data = request.get_json()
    name = data['name']
    price = data['price']
    image = data['image']
    new_car = CarModel(name, price, image)
    db.session.add(new_car)
    db.session.commit()
    return jsonify({'status': 'success', 'car': new_car.to_json()}), 201


@app.route('/edit/<int:id>', methods=['PATCH'])
def edit(id):
    car = CarModel.query.get(id)
    if car:
        car.name = request.json.get('name', car.name)
        car.price = request.json.get('price', car.price)
        car.image = request.json.get('image', car.image)
        db.session.commit()
        return jsonify({'status': 'success', 'car': car.to_json()}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Car not found'}), 404


@app.route('/delete/<int:id>', methods=['DELETE'])
def delete(id):
    car = CarModel.query.get(id)
    if car:
        db.session.delete(car)
        db.session.commit()
        return jsonify({'status': 'success', 'message': 'Car deleted'}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Car not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)
