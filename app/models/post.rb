class Post < ApplicationRecord
    mount_uploader :image, ImageUploader

    scope :active, -> { where active: true }
    belongs_to :account
    before_create :set_active
    def set_active
        self.active = true
    end
end
