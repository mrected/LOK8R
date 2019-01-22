class AddDobMonthYearToSearchInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :search_infos, :dob_month_year, :string
    remove_column :search_infos, :birth_month
    remove_column :search_infos, :birth_day
    remove_column :search_infos, :birth_year
  end
end
