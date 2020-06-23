module Api::V1
  class ContactsController < ApplicationController
    before_action :set_contact, only: [:show, :update, :destroy]

    # GET /contacts
    def index
      @contacts = Contact.all

      render json: @contacts
    end

    # POST /contacts
    def create
      @contact = Contact.new(contact_params)

      if @contact.save
        render json: @contact, status: :created
        ContactMailer.send_email(contact: @contact).deliver!
      else
        render json: @contact.errors, status: :unprocessable_entity
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_contact
        @contact = Contact.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def contact_params
        params.require(:contact).permit(:first_name, :last_name, :email, :phone, :message)
      end
  end
end