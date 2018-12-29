class Plan < ApplicationRecord
  validates_presence_of :title, :description, :time
end
