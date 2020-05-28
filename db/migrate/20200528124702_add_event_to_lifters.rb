class AddEventToLifters < ActiveRecord::Migration[5.1]
  def change
    add_column :lifters, :event, :string
  end
end
