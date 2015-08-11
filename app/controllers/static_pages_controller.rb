class StaticPagesController < ApplicationController
  def root
  end

  def index
    if current_user
      render :root
    else
      @hide_sign_up = true
      render :index
    end
  end
end
