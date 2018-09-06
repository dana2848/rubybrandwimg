class Post < ApplicationRecord
has_attached_file :photo, styles: { main: "615x300>", thumb: "325x100>"}
validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/
validates :photo, presence: true
end
