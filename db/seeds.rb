Follow.create!([
  {user_id: 2, property_id: 6},
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
Investment.create!([
  {user_id: 1, property_id: 1, pending: false, percentage: 4, initial: true},
  {user_id: 2, property_id: 1, pending: true, percentage: 12, initial: false},
  {user_id: 3, property_id: 2, pending: false, percentage: 7, initial: true},
  {user_id: 1, property_id: 2, pending: true, percentage: 3, initial: false},
  {user_id: 2, property_id: 2, pending: true, percentage: 15, initial: false},
  {user_id: 3, property_id: 3, pending: false, percentage: 10, initial: true},
  {user_id: 3, property_id: 4, pending: false, percentage: 25, initial: true},
  {user_id: 4, property_id: 3, pending: true, percentage: 4, initial: false},
  {user_id: 4, property_id: 4, pending: true, percentage: 3, initial: false},
  {user_id: 4, property_id: 1, pending: true, percentage: 6, initial: false}
])
Property.create!([
  {street_number: "439", unit: nil, street: "19th Ave", city: "San Francisco", state: "CA", zip: "94110", description: nil, num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.779547, longitude: -122.478572, zpid: "52273863", user_id: 4, zestimate: "1479687", zindexvalue: "1,027,600", area: "Bernal Heights", areatype: "neighborhood"},
  {street_number: "156", unit: nil, street: "Ripley St", city: "San Francisco", state: "CA", zip: "94110", description: nil, num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.7440753, longitude: -122.4115506, zpid: "52273863", user_id: 4, zestimate: "1479687", zindexvalue: "1,027,600", area: "Bernal Heights", areatype: "neighborhood"},
  {street_number: "2340", unit: nil, street: "29th Ave", city: "San Francisco", state: "CA", zip: "94116", description: nil, num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.74366, longitude: -122.486153, zpid: "15120641", user_id: 4, zestimate: "1272458", zindexvalue: "886,100", area: "Parkside", areatype: "neighborhood"},
  {street_number: "478", unit: nil, street: "Hoffman Ave", city: "San Francisco", state: "CA", zip: "94110", description: "", num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.749638, longitude: -122.440814, zpid: "52273863", user_id: 4, zestimate: "1479687", zindexvalue: "1,027,600", area: "Bernal Heights", areatype: "neighborhood"},
  {street_number: "164", unit: nil, street: "28th St", city: "San Francisco", state: "CA", zip: "94131", description: nil, num_beds: nil, num_baths: nil, price: nil, property_type: "MultiFamily2To4", latitude: 37.745583, longitude: -122.426143, zpid: "2101327722", user_id: 4, zestimate: "1467025", zindexvalue: "1,533,200", area: "Noe Valley", areatype: "neighborhood"},
  {street_number: "600", unit: nil, street: "Pacheco St", city: "San Francisco", state: "CA", zip: "94116", description: nil, num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.7510848, longitude: -122.4666846, zpid: "15115181", user_id: 4, zestimate: "1553735", zindexvalue: "1,204,100", area: "Golden Gate Heights", areatype: "neighborhood"},
  {street_number: "150", unit: nil, street: "Page St APT 24", city: "San Francisco", state: "CA", zip: "94102", description: nil, num_beds: nil, num_baths: nil, price: nil, property_type: "Condominium", latitude: 37.7741226, longitude: -122.423436, zpid: "15078729", user_id: 4, zestimate: "521412", zindexvalue: "1,051,200", area: "Hayes Valley", areatype: "neighborhood"},
  {street_number: "26", unit: nil, street: "Lexington St", city: "San Francisco", state: "CA", zip: "94110", description: "You can now edit the description of your property from this edit ", num_beds: 4, num_baths: 1, price: 1000000, property_type: "Apartment", latitude: 37.762229, longitude: -122.42107, zpid: "15144010", initial: nil, user_id: nil, zestimate: "1695390", zindexvalue: "1,027,400", area: "Mission", areatype: "neighborhood"},
  {street_number: "2323", unit: nil, street: "Lake St", city: "San Francisco", state: "CA", zip: "94121", description: "", num_beds: 4, num_baths: 3, price: 4900000, property_type: "House", latitude: 37.785527, longitude: -122.484516, zpid: "2105664689", initial: nil, user_id: nil, zestimate: "4262339", zindexvalue: "1,994,400", area: "Lake", areatype: "neighborhood"},
  {street_number: "2822", unit: nil, street: "Octavia St", city: "San Francisco", state: "CA", zip: "94114", description: "", num_beds: 4, num_baths: 1, price: 1200000, property_type: "Apartment", latitude: 37.7983103, longitude: -122.4289403, zpid: "15071672", initial: nil, user_id: nil, zestimate: "3507920", zindexvalue: "1,725,700", area: "Cow Hollow", areatype: "neighborhood"},
  {street_number: "99", unit: nil, street: "Walter St", city: "San Francisco", state: "CA", zip: "94118", description: "This is a description of 99 Walter St.  This is a new description.  Does this work too? Testing Testing.", num_beds: 3, num_baths: 1, price: 1400000, property_type: "Apartment", latitude: 37.7677963, longitude: -122.43211, zpid: "2118138333", initial: nil, user_id: nil, zestimate: "1019245", zindexvalue: nil, area: "Duboce Triangle", areatype: "neighborhood"}
])
User.create!([
  {email: "fayekeegan@gmail.com", password_digest: "$2a$10$xPV6IEXrUweAxmai.okAwOVmStXRoaYgUF.Aq1Xe3A.de6zcY3wX6", session_token: "TjEsVyrlq2SozFZmvwxigg", phone_number: nil, admin: nil},
  {email: "chobbs47@gmail.com", password_digest: "$2a$10$yLncz0Bkz/ZP/04WSTpF3OzdwtPEutu6wuPwZMsTnUxttmQhj612C", session_token: "-EjFXb4wXqR8DBGYLhtwSg", phone_number: nil, admin: nil},
  {email: "guest@grounded.com", password_digest: "$2a$10$hKFzL1veNh6GrYwFd3/lAOnuMIuzI/FcWpkR7qc6JigubE6RQMAyW", session_token: "-Xd_PLGG0lw_g3OeZi9A1g", phone_number: nil, admin: nil},
  {email: "sandersbrad@gmail.com", password_digest: "$2a$10$vkYQPkzQnhojYpKsO9FT8uK5BTMbbrb3mDaSgIeYAP964jdJ6M0Ae", session_token: "Z_L_PN8pDUld22HBAazz0g", phone_number: nil, admin: 1}
])
