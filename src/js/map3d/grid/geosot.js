class GeoSOT {
    constructor(){

    }

    encode(level, lon, lat, height) {
        let lonlatResolution = LON_LAT_TABLE[level];
        let heightResolution = HEIGHT_TABLE[level];
        let lonInt = Math.floor(Math.abs(lon)/lonlatResolution);
        let latInt = Math.floor(Math.abs(lat)/lonlatResolution);
        let heightInt = Math.floor(Math.abs(height) / heightResolution);
        console.assert(lonInt <= Math.pow(2, level- 1));
        console.assert(latInt <= Math.pow(2, level-1));
        console.assert(heightInt <= Math.pow(2, level-1));
        
        if (heightInt > Math.pow(2, level - 1))
            console.log(height);

        let lonBinS = lonInt.toString(2);
        let latBinS = latInt.toString(2);
        let heightBinS = heightInt.toString(2);
        console.assert(lonBinS.length <= level - 1);
        console.assert(latBinS.length <= level - 1);
        console.assert(heightBinS.length <= level - 1);
        let lonBin = Array(level-lonBinS.length).join('0') + lonBinS;
        let latBin = Array(level - latBinS.length).join('0') + latBinS;
        let heightBin = Array(level - heightBinS.length).join('0') + heightBinS;
        lonBin = lon >= 0?'1' + lonBin:'0' + lonBin;
        latBin = lat >= 0?'1' + latBin:'0' + latBin;
        heightBin = height >= 0 ? '1' + heightBin : '0' + heightBin;
        let codeArray = Array();
        console.assert(lonBin.length === latBin.length && latBin.length === heightBin.length);
        for (var i = 0; i < lonBin.length; i++) {
            codeArray.push(lonBin[i]);
            codeArray.push(latBin[i]);
            codeArray.push(heightBin[i]);
        }
        return codeArray.join('');
    }
}