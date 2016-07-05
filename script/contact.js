(function() {
    var isSuccess = getUrlParameter('success');
    var requestId = getUrlParameter('request_id');

    if (isSuccess === '1' && requestId) {
        document.getElementById('request_id').innerHTML = requestId;
        document.getElementById('notice').classList.remove('hidden');
    }
})();
