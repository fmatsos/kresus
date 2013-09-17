BaseView = require '../lib/base_view'
BankAccessModel = require '../models/bank_access'

module.exports = class NewBankView extends BaseView

    template: require('./templates/new_bank')

    el: 'div#add-bank-window'

    events:
        'click #btn-add-bank-save' : "saveBank"

    saveBank: (event) ->
        event.preventDefault()

        view = @

        button = $ event.target
        console.log button

        oldText = button.html()
        button.addClass "disabled"
        button.html window.i18n("verifying") + "<img src='./loader_green.gif' />"

        button.removeClass 'btn-warning'
        button.addClass 'btn-success'

        @$(".message-modal").html ""

        data =
            login: $("#inputLogin").val()
            password: $("#inputPass").val()
            bank: $("#inputBank").val()

        bankAccess = new BankAccessModel data

        bankAccess.save data,
            success: (model, response, options) ->

                button.html window.i18n("sent") + " <img src='./loader_green.gif' />"

                # fetch the new accounts:
                bank = window.collections.banks.get(data.bank)
                if bank?
                    console.log "Fetching for new accounts in bank" + bank.get("name")
                    bank.accounts.trigger "loading"
                    bank.accounts.fetch()

                # success message
                $("#add-bank-window").modal("hide")
                button.removeClass "disabled"
                button.html oldText
                
                window.activeObjects.trigger "new_access_added_successfully", model

                setTimeout 500, () ->
                    $("#add-bank-window").modal("hide")
                
            error: (model, xhr, options) ->
                console.log "Error :" + xhr

                button.html window.i18n("error_check_credentials_btn")
                button.removeClass 'btn-success'
                button.removeClass 'disabled'
                button.addClass 'btn-warning'

                @$(".message-modal").html "<div class='alert alert-danger'>" + window.i18n("error_check_credentials") + "</div>"

    getRenderData: ->
        banks: window.collections.banks.models
