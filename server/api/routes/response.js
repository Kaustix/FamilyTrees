exports.success = (data) => {
    var response = {success: true};
    if (data) {
        response['data'] = data;
    }
    return response;
};

exports.fail = (err) => {
    var response = {success : false};
    if (err) {
        response['error'] = err;
    }
    return response;
};