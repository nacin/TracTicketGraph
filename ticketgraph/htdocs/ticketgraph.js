jQuery(document).ready(function($) {
	$('#ticketgraph')
		.find('input').hide()
		.end()
		.find('select').change( function() {
			$('#ticketgraph').submit();
		});

	var graph = $('#placeholder').width(800).height(500),
	barSettings = { show: true, barWidth: 86400000 };
	$.plot($('#placeholder'),
	[
		{
			data: closedTickets,
			label: 'Closed tickets',
			bars: barSettings,
			color: '#8b0000'
		},
		{
			data: openedTickets,
			label: 'New tickets',
			bars: barSettings,
			color: '#66cd00',
			stack: true
		},
		{
			data: reopenedTickets,
			label: 'Reopened tickets',
			bars: barSettings,
			color: '#458b00',
			stack: true
		}
	],
	{
		xaxis: { mode: 'time', minTickSize: [1, "day"] },
		yaxis: { label: 'Tickets' },
		legend: { position: 'ne' }
	});
});
