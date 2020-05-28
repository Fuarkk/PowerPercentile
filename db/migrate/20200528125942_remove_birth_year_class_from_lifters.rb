class RemoveBirthYearClassFromLifters < ActiveRecord::Migration[5.1]
  def change
    remove_column :lifters, :birthYearClass
  end
end
