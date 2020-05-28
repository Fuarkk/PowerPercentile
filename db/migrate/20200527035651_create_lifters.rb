class CreateLifters < ActiveRecord::Migration[5.1]
  def change
    create_table :lifters do |t|
      t.string :name
      t.integer :age
      t.string :ageClass
      t.string :birthYearClass
      t.string :division
      t.float :bodyweightKg
      t.float :weightClassKg
      t.float :squat
      t.float :bench
      t.float :deadlift
      t.float :total
      t.string :place
      t.boolean :tested
      t.string :country
      t.string :federation
      t.date :meetDate
    end
  end
end
