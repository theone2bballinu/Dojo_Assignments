class Car(object):
    def __init__(self, price, speed, fuel, mileage, tax):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = tax


    def display_all(self):
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        print "Price: " + str(self.price)
        print "Speed: " + self.speed
        print "Fuel: " + self.fuel
        print "Mileage: " + self.mileage
        print "Tax: " + str(self.tax)

car1 = Car(2000,"35mph","Full","15mpg",0.12);
car2 = Car(2000,"5mph","Not Full","105mpg",0.12)
car3 = Car(2000,"15mph","Kind of Full","95mpg",0.12)
car4 = Car(2000,"25mph","Full","25mpg",0.12)
car5 = Car(2000,"45mph","Empty","25mpg",0.12)
car6 = Car(2000000,"35mph","Empty","15mpg",0.15)

car1.display_all()
car2.display_all()
car3.display_all()
car4.display_all()
car5.display_all()
car6.display_all()
