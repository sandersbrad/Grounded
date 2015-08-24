class Api::PropertiesController < ApplicationController

  def index
    @properties = Property.includes(:investments).all
  end

  def followed
    @properties = current_user.followed_properties
  end

  def invested
    @properties = current_user.invested_properties
  end

  def show
    @property = Property.includes(:investments).find(params[:id])
  end
end
