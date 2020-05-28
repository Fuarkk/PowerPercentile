class AddEquipmentToLifters < ActiveRecord::Migration[5.1]
  def change
    add_column :lifters, :equipment, :string
  end
end
