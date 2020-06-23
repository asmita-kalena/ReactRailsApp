require 'rails_helper'

RSpec.describe 'contacts API', type: :request do
  # Test suite for POST /contacts
  describe 'POST api/v1/contacts' do
    context 'when the request is valid' do
      it 'creates a contact' do
        post "/api/v1/contacts", params: { contact: { first_name: 'Learn Elm', last_name: 'lorem', email: 'testing@gmail.com', phone: 7845784578, message: "testing message....", created_at: Time.now.to_i, updated_at: Time.now.to_i } }
        expect(response.content_type).to eq("application/json")
        expect(response).to have_http_status(:created)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/contacts', params: { contact: {first_name: 'Foobar', last_name: 'abc' }} }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'returns a json response after submitted successfully' do
        # expect(response.body)
        #   .to match("{\"id\":3,\"first_name\":\"Foobar\",\"last_name\":\"abc\",\"email\":null,\"phone\":null,\"message\":null,\"created_at\":\"#{Time.now.to_i}\",\"updated_at\":\"#{Time.now.to_i}\"}")

      end
    end
  end

end