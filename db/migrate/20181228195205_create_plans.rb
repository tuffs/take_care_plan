class CreatePlans < ActiveRecord::Migration[5.2]
  def change
    create_table :plans do |t|
      t.string :title
      t.string :description
      t.datetime :time

      t.timestamps
    end
  end
end
