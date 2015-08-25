# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150825023929) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "property_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "follows", ["property_id"], name: "index_follows_on_property_id", using: :btree
  add_index "follows", ["user_id"], name: "index_follows_on_user_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.integer  "property_id", null: false
    t.string   "image_url",   null: false
    t.string   "thumb_url",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "investments", force: :cascade do |t|
    t.integer  "user_id",                     null: false
    t.integer  "property_id",                 null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "pending",     default: true
    t.integer  "percentage",                  null: false
    t.boolean  "initial",     default: false
  end

  create_table "properties", force: :cascade do |t|
    t.string   "street_number", null: false
    t.string   "unit"
    t.string   "street",        null: false
    t.string   "city",          null: false
    t.string   "state",         null: false
    t.string   "zip",           null: false
    t.text     "description"
    t.integer  "num_beds"
    t.integer  "num_baths"
    t.integer  "price"
    t.string   "property_type"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.float    "latitude"
    t.float    "longitude"
    t.string   "zpid"
  end

  add_index "properties", ["city"], name: "index_properties_on_city", using: :btree
  add_index "properties", ["num_baths"], name: "index_properties_on_num_baths", using: :btree
  add_index "properties", ["num_beds"], name: "index_properties_on_num_beds", using: :btree
  add_index "properties", ["price"], name: "index_properties_on_price", using: :btree
  add_index "properties", ["property_type"], name: "index_properties_on_property_type", using: :btree
  add_index "properties", ["state"], name: "index_properties_on_state", using: :btree
  add_index "properties", ["street"], name: "index_properties_on_street", using: :btree
  add_index "properties", ["zip"], name: "index_properties_on_zip", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "phone_number"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "admin"
  end

end
