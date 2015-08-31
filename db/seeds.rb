Follow.create!([
  {user_id: 2, property_id: 3}
])
Image.create!([
  {property_id: 1, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764856/cqgsbbc6dv034hp2ujzw.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764856/cqgsbbc6dv034hp2ujzw.jpg"},
  {property_id: 1, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764865/zpcotmnlf8pl5hizuwow.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764865/zpcotmnlf8pl5hizuwow.jpg"},
  {property_id: 2, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764894/kjv0t7viktlblijdasjp.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764894/kjv0t7viktlblijdasjp.jpg"},
  {property_id: 2, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764899/nxjkvkk49dsz3e0b2nld.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764899/nxjkvkk49dsz3e0b2nld.jpg"},
  {property_id: 3, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764915/e2s2se2vmkn4acablwgm.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764915/e2s2se2vmkn4acablwgm.jpg"},
  {property_id: 3, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764921/tham0qs7zrrrkckdun5m.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764921/tham0qs7zrrrkckdun5m.jpg"}
])
Property.create!([
  {street_number: "26", unit: nil, street: "Lexington St", city: "San Francisco", state: "CA", zip: "94110", description: nil, num_beds: 4, num_baths: 1, price: 1000000, property_type: "Apartment"},
  {street_number: "2822", unit: nil, street: "Octavia St", city: "San Francisco", state: "CA", zip: "94114", description: nil, num_beds: 4, num_baths: 1, price: 1200000, property_type: "Apartment"},
  {street_number: "99", unit: nil, street: "Walter St", city: "San Francisco", state: "CA", zip: "94118", description: nil, num_beds: 3, num_baths: 1, price: 1400000, property_type: "Apartment"},
  {street_number: "2323", unit: nil, street: "Lake St", city: "San Francisco", state: "CA", zip: "94121", description: nil, num_beds: 4, num_baths: 3, price: 4900000, property_type: "House"},
  # {street_number: "", unit: nil, street: "Lake St", city: "San Francisco", state: "CA", zip: "94121", description: nil, num_beds: 4, num_baths: 3, price: 4900000, property_type: "House"},
  # {street_number: "2323", unit: nil, street: "Lake St", city: "San Francisco", state: "CA", zip: "94121", description: nil, num_beds: 4, num_baths: 3, price: 4900000, property_type: "House"}
])
User.create!([
  {email: "fayekeegan@gmail.com", password: "dubmass", admin: nil},
  {email: "guest@grounded.com", password: "password", admin: nil},
  {email: "chobbs47@gmail.com", password: "password", admin: nil},
  {email: "sandersbrad@gmail.com", password: "dummypass", admin: 1}
])
Investment.create([
  {user_id: 1, property_id: 1, pending: false, percentage: 4, initial: true},
  {user_id: 2, property_id: 1, pending: true,  percentage: 12},
  {user_id: 3, property_id: 2, pending: false, percentage: 7, initial: true},
  {user_id: 1, property_id: 2, pending: true,  percentage: 3},
  {user_id: 2, property_id: 2, pending: true,  percentage: 15},
  {user_id: 3, property_id: 3, pending: false, percentage: 10, initial: true},
  {user_id: 3, property_id: 4, pending: false, percentage: 25, initial: true}
])
