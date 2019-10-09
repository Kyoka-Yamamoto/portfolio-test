class PagesController < ApplicationController
  def index
  end

  def get_names
    @name = {
      name: "Davidson"
    }

    render json: {
      result: @name
    }
  end
end
