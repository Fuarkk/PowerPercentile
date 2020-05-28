class RemoveAgeClassFromLifters < ActiveRecord::Migration[5.1]
  def change
    remove_column :lifters, :ageClass
  end
end
