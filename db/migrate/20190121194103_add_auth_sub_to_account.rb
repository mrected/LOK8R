class AddAuthSubToAccount < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :auth_sub, :text
  end
end
