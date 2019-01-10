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

ActiveRecord::Schema.define(version: 2019_01_10_144351) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "search_infos", force: :cascade do |t|
    t.string "first_name"
    t.string "alias"
    t.string "last_name"
    t.string "gender"
    t.integer "birth_year"
    t.integer "birth_month"
    t.integer "birth_day"
    t.string "birth_state"
    t.string "mothers_first"
    t.string "mothers_last"
    t.string "fathers_first"
    t.string "fathers_last"
    t.integer "last_year_seen"
    t.string "they_are_to_you"
    t.string "you_are_to_them"
    t.string "reason_for_separation"
    t.bigint "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_search_infos_on_account_id"
  end

  create_table "user_infos", force: :cascade do |t|
    t.string "first_name"
    t.string "alias"
    t.string "last_name"
    t.string "gender"
    t.integer "birth_year"
    t.integer "birth_month"
    t.integer "birth_day"
    t.string "birth_state"
    t.string "mothers_first"
    t.string "mothers_last"
    t.string "fathers_first"
    t.string "fathers_last"
    t.bigint "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_user_infos_on_account_id"
  end

  add_foreign_key "search_infos", "accounts"
  add_foreign_key "user_infos", "accounts"
end
