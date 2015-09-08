Follow.create!([
  {user_id: 2, property_id: 6},
  {user_id: 2, property_id: 3},
  {user_id: 3, property_id: 5},
  {user_id: 3, property_id: 1},
  {user_id: 4, property_id: 10}
])
Image.create!([
  {property_id: 1, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764856/cqgsbbc6dv034hp2ujzw.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764856/cqgsbbc6dv034hp2ujzw.jpg"},
  {property_id: 1, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764865/zpcotmnlf8pl5hizuwow.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764865/zpcotmnlf8pl5hizuwow.jpg"},
  {property_id: 2, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764894/kjv0t7viktlblijdasjp.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764894/kjv0t7viktlblijdasjp.jpg"},
  {property_id: 2, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764899/nxjkvkk49dsz3e0b2nld.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764899/nxjkvkk49dsz3e0b2nld.jpg"},
  {property_id: 3, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764915/e2s2se2vmkn4acablwgm.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764915/e2s2se2vmkn4acablwgm.jpg"},
  {property_id: 3, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1439764921/tham0qs7zrrrkckdun5m.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1439764921/tham0qs7zrrrkckdun5m.jpg"},
  {property_id: 5, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1441684065/hbek3zg6scc7zw4ycbj7.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1441684065/hbek3zg6scc7zw4ycbj7.jpg"},
  {property_id: 6, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1441684085/endm1g9npkd7naxqazvm.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1441684085/endm1g9npkd7naxqazvm.jpg"},
  {property_id: 4, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1441684106/ibgciomxlhlbz9qhdktp.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1441684106/ibgciomxlhlbz9qhdktp.jpg"},
  {property_id: 12, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1441684295/mplijohayaayt4tlwxze.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1441684295/mplijohayaayt4tlwxze.jpg"},
  {property_id: 13, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1441684340/dzziztcoml5kyivcsadn.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1441684340/dzziztcoml5kyivcsadn.jpg"},
  {property_id: 10, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1441684489/dcvqik96bw4jmuh1yapk.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1441684489/dcvqik96bw4jmuh1yapk.jpg"},
  {property_id: 11, image_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/v1441744264/avfwuzpvwhjl6h8axy1w.jpg", thumb_url: "http://res.cloudinary.com/dwhvrflyu/image/upload/c_limit,h_60,w_90/v1441744264/avfwuzpvwhjl6h8axy1w.jpg"}
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
  {user_id: 4, property_id: 1, pending: true, percentage: 6, initial: false},
  {user_id: 4, property_id: 5, pending: true, percentage: 11, initial: false},
  {user_id: 4, property_id: 8, pending: true, percentage: 12, initial: false},
  {user_id: 4, property_id: 12, pending: false, percentage: 17, initial: false},
  {user_id: 3, property_id: 13, pending: true, percentage: 2, initial: false},
  {user_id: 4, property_id: 13, pending: false, percentage: 17, initial: false},
  {user_id: 4, property_id: 9, pending: false, percentage: 24, initial: false},
  {user_id: 4, property_id: 7, pending: false, percentage: 12, initial: false},
  {user_id: 4, property_id: 6, pending: false, percentage: 19, initial: false}
])
Property.create!([
  {street_number: "439", unit: nil, street: "19th Ave", city: "San Francisco", state: "CA", zip: "94110", description: "Charming full floor 3 bedrm 2 bath condo in the Central Richmond! This residence boasts an open floor plan that is great for entertaining. Kitchen with stainless steel appliances and granite countertops. Outdoor patio area accessed from the master bedroom and 2nd bedroom. Deeded one car parking (tandem).", num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.779547, longitude: -122.478572, zpid: "52273863", initial: nil, user_id: 4, zestimate: "1479687", zindexvalue: "1,027,600", area: "Bernal Heights", areatype: "neighborhood"},
  {street_number: "156", unit: nil, street: "Ripley St", city: "San Francisco", state: "CA", zip: "94110", description: "Spectacular modern town home with stunning views of downtown San Francisco. The home features 2 master suites with walk-in closets and en suite bathrooms.The large great room with soaring ceilings, an entertaining deck and dramatic views. The modern kitchen features granite counters and beautiful cabinets. The back yard features a wonderful patio. Located on desirable Ripley Street, this North Bernal location is close to Precita Park, Precita Park Cafe, Bernal Heights Supper Club, and Bernal Heights Park. Cortland restaurants and tech shuttle stops, 280 and 101, and BART are also just minutes away. Completing the home is a one car garage. 2 Master Suites 2.5 Bathrooms Spectacular Views View Deck Back Yard", num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.7440753, longitude: -122.4115506, zpid: "52273863", initial: nil, user_id: 4, zestimate: "1479687", zindexvalue: "1,027,600", area: "Bernal Heights", areatype: "neighborhood"},
  {street_number: "2340", unit: nil, street: "29th Ave", city: "San Francisco", state: "CA", zip: "94116", description: "Elegant Parkside Residence: This Spacious and Bright 2 Story, Semi Detached Home offers: 4-Bedrooms, 2-Bathrooms, Family Room and Deck with View all on the Top and Main Levels. The Living and Dining Room are enhanced with graceful lines of the Windows, Ceilings and other Fine Details. Bright Updated Kitchen with a Wolf Range Top, Double Oven, lots of Cabinets and Corian Counter Space. ", num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.74366, longitude: -122.486153, zpid: "15120641", initial: nil, user_id: 4, zestimate: "1272458", zindexvalue: "886,100", area: "Parkside", areatype: "neighborhood"},
  {street_number: "478", unit: nil, street: "Hoffman Ave", city: "San Francisco", state: "CA", zip: "94110", description: "This special 3 bed, 1.5 bath home is located on a quiet Noe Valley Street a few blocks from the 24th Street corridor. Charming details, open flr plan, hardwood floors, deep landscaped garden (125 foot lot) complete w/ tire swing & sandbox. Living rm features built-ins & flows to open kitchen & dining area w/french doors leading to deck & yard. Kitchen incl. stainless appliances & butcher block island w/ breakfast bar, 1/2 bathroom & interior access to 1-2-car garage. ", num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.749638, longitude: -122.440814, zpid: "52273863", initial: nil, user_id: 4, zestimate: "1479687", zindexvalue: "1,027,600", area: "Bernal Heights", areatype: "neighborhood"},
  {street_number: "164", unit: nil, street: "28th St", city: "San Francisco", state: "CA", zip: "94131", description: nil, num_beds: nil, num_baths: nil, price: nil, property_type: "MultiFamily2To4", latitude: 37.745583, longitude: -122.426143, zpid: "2101327722", initial: nil, user_id: 4, zestimate: "1467025", zindexvalue: "1,533,200", area: "Noe Valley", areatype: "neighborhood"},
  {street_number: "600", unit: nil, street: "Pacheco St", city: "San Francisco", state: "CA", zip: "94116", description: "This Cape Cod style home in Golden Gates Heights is exceptional. The 3 bedroom, 2 bath home is located on a select corner lot, is fully detached, and has outstanding curb appeal. The home is nicely laid out on two levels. On the main level is an open living room and dining area with a wood-burning fireplace. The room is filled with natural light from its many large windows, and offers expansive views of Twin Peaks. ", num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.7510848, longitude: -122.4666846, zpid: "15115181", initial: nil, user_id: 4, zestimate: "1553735", zindexvalue: "1,204,100", area: "Golden Gate Heights", areatype: "neighborhood"},
  {street_number: "150", unit: nil, street: "Page St APT 24", city: "San Francisco", state: "CA", zip: "94102", description: "This hip and happening neighborhood is home to some of the best restaurants and shopping in the city. Enjoy Sunday brunch at Bar Jules followed by a day of shopping and an afternoon enjoying the sunshine at the cities only authentic Biergarten. \r\nLocated right in the heart of the cities arts district you can enjoy an evening at the symphony at Louise M. Davies Symphony Hall or take in an opera at the San Francisco War Memorial Opera House or enjoy an evening of Jazz at the brand new San Francisco Jazz Center.", num_beds: nil, num_baths: nil, price: nil, property_type: "Condominium", latitude: 37.7741226, longitude: -122.423436, zpid: "15078729", initial: nil, user_id: 4, zestimate: "521412", zindexvalue: "1,051,200", area: "Hayes Valley", areatype: "neighborhood"},
  {street_number: "26", unit: nil, street: "Lexington St", city: "San Francisco", state: "CA", zip: "94110", description: "This is a 2370 square foot, 2.0 bathroom, multiple occupancy home. It is located at 26-28 LEXINGTON ST SAN FRANCISCO, California.", num_beds: 4, num_baths: 1, price: 1000000, property_type: "Apartment", latitude: 37.762229, longitude: -122.42107, zpid: "15144010", initial: nil, user_id: nil, zestimate: "1695390", zindexvalue: "1,027,400", area: "Mission", areatype: "neighborhood"},
  {street_number: "2822", unit: nil, street: "Octavia St", city: "San Francisco", state: "CA", zip: "94114", description: "This is a 4452 square foot, 3.0 bathroom, multiple occupancy home. It is located at 2820-2824 OCTAVIA ST SAN FRANCISCO, California.", num_beds: 4, num_baths: 1, price: 1200000, property_type: "Apartment", latitude: 37.7983103, longitude: -122.4289403, zpid: "15071672", initial: nil, user_id: nil, zestimate: "3507920", zindexvalue: "1,725,700", area: "Cow Hollow", areatype: "neighborhood"},
  {street_number: "4971", unit: nil, street: "17th St", city: "San Francisco", state: "CA", zip: "94117", description: "Great price for large two units that has been sub-divided into three without permit. Perfect for owner occupier or investor. Currently consists of 2-1BR units and a 3BR/2BA unit. Large garage for future expansion. New paint, remodeled kitchen. Great location!", num_beds: nil, num_baths: nil, price: nil, property_type: "MultiFamily2To4", latitude: 37.76129, longitude: -122.451555, zpid: "15088425", initial: true, user_id: 4, zestimate: "2732198", zindexvalue: "1,776,400", area: "Parnassus - Ashbury", areatype: "neighborhood"},
  {street_number: "214", unit: nil, street: "Twin Peaks Blvd", city: "San Francisco", state: "CA", zip: "94114", description: "", num_beds: nil, num_baths: nil, price: nil, property_type: "SingleFamily", latitude: 37.7587572, longitude: -122.4487026, zpid: "15129664", initial: true, user_id: 3, zestimate: "1868058", zindexvalue: nil, area: "Clarendon Heights", areatype: "neighborhood"},
  {street_number: "99", unit: nil, street: "Walter St", city: "San Francisco", state: "CA", zip: "94118", description: "2 BR + Office/ 1BA apartment in a well maintained, professionally managed 6-unit, handsome building. Additional rooms include a living room with fireplace, formal dinningroom with built-in sideboard, plus kitchen with large pantry. Located on a quiet, charming, tree-lined street 1 block from Duboce Park and 3 blocks from Market Street.", num_beds: 3, num_baths: 1, price: 1400000, property_type: "Apartment", latitude: 37.7677963, longitude: -122.43211, zpid: "2118138333", initial: nil, user_id: nil, zestimate: "1019245", zindexvalue: nil, area: "Duboce Triangle", areatype: "neighborhood"},
  {street_number: "2323", unit: nil, street: "Lake St", city: "San Francisco", state: "CA", zip: "94121", description: "New dual pane windows, new vinyl siding, new roof installed in 2014. The 4 car garage has a ton of storage, laundry room and room to expand the lower unit. The penthouse, and the ground floor unit are vacant. Since this property was built in 1927 it has had only 3 owners.", num_beds: 4, num_baths: 3, price: 4900000, property_type: "House", latitude: 37.785527, longitude: -122.484516, zpid: "2105664689", initial: nil, user_id: nil, zestimate: "4262339", zindexvalue: "1,994,400", area: "Lake", areatype: "neighborhood"}
])
User.create!([
  {email: "fayekeegan@gmail.com", password_digest: "$2a$10$xPV6IEXrUweAxmai.okAwOVmStXRoaYgUF.Aq1Xe3A.de6zcY3wX6", session_token: "TjEsVyrlq2SozFZmvwxigg", phone_number: nil, admin: nil},
  {email: "chobbs47@gmail.com", password_digest: "$2a$10$yLncz0Bkz/ZP/04WSTpF3OzdwtPEutu6wuPwZMsTnUxttmQhj612C", session_token: "-EjFXb4wXqR8DBGYLhtwSg", phone_number: nil, admin: nil},
  {email: "guest@grounded.com", password_digest: "$2a$10$hKFzL1veNh6GrYwFd3/lAOnuMIuzI/FcWpkR7qc6JigubE6RQMAyW", session_token: "hJbA9aKBiuFYUx2H-uBsdA", phone_number: nil, admin: nil},
  {email: "sandersbrad@gmail.com", password_digest: "$2a$10$vkYQPkzQnhojYpKsO9FT8uK5BTMbbrb3mDaSgIeYAP964jdJ6M0Ae", session_token: "8JHAqeRFuurXEz88j4TsxA", phone_number: nil, admin: 1}
])
