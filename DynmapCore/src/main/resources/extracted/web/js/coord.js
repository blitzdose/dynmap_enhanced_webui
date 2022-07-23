componentconstructors['coord'] = function(dynmap, configuration) {

	var Coord = L.Control.extend({
		valfield: $('<span/>'),
		mcrfield: $('<span/>'),
		chunkfield: $('<span/>'),

		onAdd: function(map) {
			if(configuration.hidey) 
				this._container = L.DomUtil.create('div', 'coord-control coord-control-noy');
			else
				this._container = L.DomUtil.create('div', 'coord-control');
			this._map = map;
			$('<span/>').addClass('coord-control-label').text((configuration.label || 'x,y,z') + ': ').appendTo(this._container);
			$('<br/>').appendTo(this._container);
			this.valfield.addClass('coord-control-value').text(configuration.hidey ? '---,---' : '---,---,---').appendTo(this._container);
			if(configuration['show-mcr']) {
				$('<br/>').appendTo(this._container);
				this.mcrfield.addClass('coord-control-value').text('--------').appendTo(this._container);
			}
			if(configuration['show-chunk']) {
				$('<br/>').appendTo(this._container);
				this.chunkfield.addClass('coord-control-value').text('Chunk: ---,---').appendTo(this._container);
			}
			this._update();
			return this.getContainer();
		},

		getPosition: function() {
			return 'topleft';
		},

		getContainer: function() {
			return this._container;
		},

		_update: function() {
			if (!this._map) return;
		}
	});

	var coord = new Coord();
	dynmap.map.addControl(coord);
	dynmap.map.on('contextmenu', function(cevent) {
		if(!dynmap.map) return;



		var loc = dynmap.getProjection().fromLatLngToLocation(cevent.latlng, dynmap.world.sealevel+1);
		//alert(Math.round(loc.x) + "  " + loc.y + "   " + Math.round(loc.z));
		let name = prompt('Marker Name:');
		if (name != null && name != '') {
			//SEND REQUEST TO CREATE MARKER
			//alert(name);
			bootbox.prompt({
				title: "Select Icon:",
				message: '<p>Please select an option below:</p>',
				inputType: 'radio',
				inputOptions: [
					{text: '<img src="tiles/_markers_/anchor.png" />', value: 'anchor.png'},
					{text: '<img src="tiles/_markers_/bank.png" />', value: 'bank.png'},
					{text: '<img src="tiles/_markers_/basket.png" />', value: 'basket.png'},
					{text: '<img src="tiles/_markers_/bed.png" />', value: 'bed.png'},
					{text: '<img src="tiles/_markers_/beer.png" />', value: 'beer.png'},
					{text: '<img src="tiles/_markers_/bighouse.png" />', value: 'bighouse.png'},
					{text: '<img src="tiles/_markers_/blueflag.png" />', value: 'blueflag.png'},
					{text: '<img src="tiles/_markers_/bomb.png" />', value: 'bomb.png'},
					{text: '<img src="tiles/_markers_/bookshelf.png" />', value: 'bookshelf.png'},
					{text: '<img src="tiles/_markers_/bricks.png" />', value: 'bricks.png'},
					{text: '<img src="tiles/_markers_/bronzemedal.png" />', value: 'bronzemedal.png'},
					{text: '<img src="tiles/_markers_/bronzestar.png" />', value: 'bronzestar.png'},
					{text: '<img src="tiles/_markers_/building.png" />', value: 'building.png'},
					{text: '<img src="tiles/_markers_/cake.png" />', value: 'cake.png'},
					{text: '<img src="tiles/_markers_/camera.png" />', value: 'camera.png'},
					{text: '<img src="tiles/_markers_/cart.png" />', value: 'cart.png'},
					{text: '<img src="tiles/_markers_/caution.png" />', value: 'caution.png'},
					{text: '<img src="tiles/_markers_/chest.png" />', value: 'chest.png'},
					{text: '<img src="tiles/_markers_/church.png" />', value: 'church.png'},
					{text: '<img src="tiles/_markers_/coins.png" />', value: 'coins.png'},
					{text: '<img src="tiles/_markers_/comment.png" />', value: 'comment.png'},
					{text: '<img src="tiles/_markers_/compass.png" />', value: 'compass.png'},
					{text: '<img src="tiles/_markers_/construction.png" />', value: 'construction.png'},
					{text: '<img src="tiles/_markers_/cross.png" />', value: 'cross.png'},
					{text: '<img src="tiles/_markers_/cup.png" />', value: 'cup.png'},
					{text: '<img src="tiles/_markers_/cutlery.png" />', value: 'cutlery.png'},
					{text: '<img src="tiles/_markers_/default.png" />', value: 'default.png'},
					{text: '<img src="tiles/_markers_/diamond.png" />', value: 'diamond.png'},
					{text: '<img src="tiles/_markers_/dog.png" />', value: 'dog.png'},
					{text: '<img src="tiles/_markers_/door.png" />', value: 'door.png'},
					{text: '<img src="tiles/_markers_/down.png" />', value: 'down.png'},
					{text: '<img src="tiles/_markers_/drink.png" />', value: 'drink.png'},
					{text: '<img src="tiles/_markers_/exclamation.png" />', value: 'exclamation.png'},
					{text: '<img src="tiles/_markers_/factory.png" />', value: 'factory.png'},
					{text: '<img src="tiles/_markers_/fire.png" />', value: 'fire.png'},
					{text: '<img src="tiles/_markers_/flower.png" />', value: 'flower.png'},
					{text: '<img src="tiles/_markers_/gear.png" />', value: 'gear.png'},
					{text: '<img src="tiles/_markers_/goldmedal.png" />', value: 'goldmedal.png'},
					{text: '<img src="tiles/_markers_/goldstar.png" />', value: 'goldstar.png'},
					{text: '<img src="tiles/_markers_/greenflag.png" />', value: 'greenflag.png'},
					{text: '<img src="tiles/_markers_/hammer.png" />', value: 'hammer.png'},
					{text: '<img src="tiles/_markers_/heart.png" />', value: 'heart.png'},
					{text: '<img src="tiles/_markers_/house.png" />', value: 'house.png'},
					{text: '<img src="tiles/_markers_/key.png" />', value: 'key.png'},
					{text: '<img src="tiles/_markers_/king.png" />', value: 'king.png'},
					{text: '<img src="tiles/_markers_/left.png" />', value: 'left.png'},
					{text: '<img src="tiles/_markers_/lightbulb.png" />', value: 'lightbulb.png'},
					{text: '<img src="tiles/_markers_/lighthouse.png" />', value: 'lighthouse.png'},
					{text: '<img src="tiles/_markers_/lock.png" />', value: 'lock.png'},
					{text: '<img src="tiles/_markers_/minecart.png" />', value: 'minecart.png'},
					{text: '<img src="tiles/_markers_/offlineuser.png" />', value: 'offlineuser.png'},
					{text: '<img src="tiles/_markers_/orangeflag.png" />', value: 'orangeflag.png'},
					{text: '<img src="tiles/_markers_/pin.png" />', value: 'pin.png'},
					{text: '<img src="tiles/_markers_/pinkflag.png" />', value: 'pinkflag.png'},
					{text: '<img src="tiles/_markers_/pirateflag.png" />', value: 'pirateflag.png'},
					{text: '<img src="tiles/_markers_/pointdown.png" />', value: 'pointdown.png'},
					{text: '<img src="tiles/_markers_/pointleft.png" />', value: 'pointleft.png'},
					{text: '<img src="tiles/_markers_/pointright.png" />', value: 'pointright.png'},
					{text: '<img src="tiles/_markers_/pointup.png" />', value: 'pointup.png'},
					{text: '<img src="tiles/_markers_/portal.png" />', value: 'portal.png'},
					{text: '<img src="tiles/_markers_/purpleflag.png" />', value: 'purpleflag.png'},
					{text: '<img src="tiles/_markers_/queen.png" />', value: 'queen.png'},
					{text: '<img src="tiles/_markers_/redflag.png" />', value: 'redflag.png'},
					{text: '<img src="tiles/_markers_/right.png" />', value: 'right.png'},
					{text: '<img src="tiles/_markers_/ruby.png" />', value: 'ruby.png'},
					{text: '<img src="tiles/_markers_/scales.png" />', value: 'scales.png'},
					{text: '<img src="tiles/_markers_/shield.png" />', value: 'shield.png'},
					{text: '<img src="tiles/_markers_/sign.png" />', value: 'sign.png'},
					{text: '<img src="tiles/_markers_/silvermedal.png" />', value: 'silvermedal.png'},
					{text: '<img src="tiles/_markers_/silverstar.png" />', value: 'silverstar.png'},
					{text: '<img src="tiles/_markers_/skull.png" />', value: 'skull.png'},
					{text: '<img src="tiles/_markers_/star.png" />', value: 'star.png'},
					{text: '<img src="tiles/_markers_/sun.png" />', value: 'sun.png'},
					{text: '<img src="tiles/_markers_/temple.png" />', value: 'temple.png'},
					{text: '<img src="tiles/_markers_/theater.png" />', value: 'theater.png'},
					{text: '<img src="tiles/_markers_/tornado.png" />', value: 'tornado.png'},
					{text: '<img src="tiles/_markers_/tower.png" />', value: 'tower.png'},
					{text: '<img src="tiles/_markers_/tree.png" />', value: 'tree.png'},
					{text: '<img src="tiles/_markers_/truck.png" />', value: 'truck.png'},
					{text: '<img src="tiles/_markers_/up.png" />', value: 'up.png'},
					{text: '<img src="tiles/_markers_/walk.png" />', value: 'walk.png'},
					{text: '<img src="tiles/_markers_/warning.png" />', value: 'warning.png'},
					{text: '<img src="tiles/_markers_/world.png" />', value: 'world.png'},
					{text: '<img src="tiles/_markers_/wrench.png" />', value: 'wrench.png'},
					{text: '<img src="tiles/_markers_/yellowflag.png" />', value: 'yellowflag.png'}
				],
				callback: function (icon) {
					$.get("webmarker?type=add&world=" + dynmap.world.name + "&x=" + Math.round(loc.x) + "&z=" + Math.round(loc.z) + "&name=" + name + "&icon=" + icon, function (data, status) {
						alert(status);
					});
				}
			});
		}
	});
	dynmap.map.on('mousemove', function(mevent) {
		if(!dynmap.map) return;
		var loc = dynmap.getProjection().fromLatLngToLocation(mevent.latlng, dynmap.world.sealevel+1);
		if(configuration.hidey)
			coord.valfield.text(Math.round(loc.x) + ',' + Math.round(loc.z));
		else
			coord.valfield.text(Math.round(loc.x) + ',' + loc.y + ',' + Math.round(loc.z));
		if(configuration['show-mcr'])
			coord.mcrfield.text('r.' + Math.floor(loc.x/512) + '.' + Math.floor(loc.z/512) + '.mca');
		if(configuration['show-chunk'])
			coord.chunkfield.text('Chunk: ' + Math.floor(loc.x/16) + ',' + Math.floor(loc.z/16));
	});
	dynmap.map.on('mouseout', function(mevent) {
		if(!dynmap.map) return;
		if(configuration.hidey)
			coord.valfield.text('---,---');
		else
			coord.valfield.text('---,---,---');
		if(configuration['show-mcr'])
			coord.mcrfield.text('--------');
		if(configuration['show-chunk'])
			coord.chunkfield.text('Chunk: ---,---');
	});
};
