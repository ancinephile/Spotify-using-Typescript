export const ParamsFromUrl = () => {
    return window.location.hash.substring(1)
        .split("&")
        .reduce(function (initial: { [key: string]: any; }, item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};