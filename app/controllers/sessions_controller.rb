class SessionsController < ApplicationController
  def new
    @hide_sign_in = true
    user = User.new
  end

  def create
    user = User.find_by_credentials( params[:user][:email],
                                     params[:user][:password]
    )

    if user
      sign_in(user)
      render '/static_pages/root'
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to root_url
  end
end
