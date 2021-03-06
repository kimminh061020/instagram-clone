class PublicController < ApplicationController
    helper_method :resource_name, :resource, :devise_mapping, :resource_class

    def resource_name
      :account
    end

    def resource
      @resource ||= Account.new
    end

    def resource_class
      Account
    end

    def devise_mapping
      @devise_mapping ||= Devise.mappings[:account]
    end
end
