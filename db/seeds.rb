# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



properties = Property.create([{ street_number: '26', street: 'Lexington St',
                                city: 'San Francisco', state: 'CA', zip: '94110',
                                num_beds: 4, num_baths: 1, price: 1000000,
                                property_type: 'Apartment' },

                              { street_number: '2822', street: 'Octavia St',
                                city: 'San Francisco', state: 'CA', zip: '94114',
                                num_beds: 4, num_baths: 1, price: 1200000,
                                property_type: 'Apartment'  }])
