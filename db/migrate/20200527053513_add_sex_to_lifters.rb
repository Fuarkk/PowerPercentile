class AddSexToLifters < ActiveRecord::Migration[5.1]
  def change
    add_column :lifters, :sex, :string
  end
end
