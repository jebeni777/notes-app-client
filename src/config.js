export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_WGchLTHcnfBaplt57vEvUScg00KBokFZBI",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-uploads-jebeni777"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://n15533w58c.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_zBhwErYrH",
        APP_CLIENT_ID: "24pcb92uc4ukle2avo6vnoje5l",
        IDENTITY_POOL_ID: "us-east-2:1d75f482-be44-473d-bce2-ca0ca0707620"
    }
};