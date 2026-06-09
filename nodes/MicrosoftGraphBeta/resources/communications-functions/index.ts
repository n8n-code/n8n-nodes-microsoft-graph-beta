import type { INodeProperties } from 'n8n-workflow';

export const communicationsFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					]
				}
			},
			"options": [
				{
					"name": "Communications Call Records Get Direct Routing Calls",
					"value": "Communications Call Records Get Direct Routing Calls",
					"action": "Invoke function getDirectRoutingCalls",
					"description": "Invoke function getDirectRoutingCalls",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/callRecords/microsoft.graph.callRecords.getDirectRoutingCalls(fromDateTime={{$parameter[\"fromDateTime\"]}},toDateTime={{$parameter[\"toDateTime\"]}})"
						}
					}
				},
				{
					"name": "Communications Call Records Get Pstn Calls",
					"value": "Communications Call Records Get Pstn Calls",
					"action": "Invoke function getPstnCalls",
					"description": "Invoke function getPstnCalls",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/callRecords/microsoft.graph.callRecords.getPstnCalls(fromDateTime={{$parameter[\"fromDateTime\"]}},toDateTime={{$parameter[\"toDateTime\"]}})"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /communications/callRecords/microsoft.graph.callRecords.getDirectRoutingCalls(fromDateTime={fromDateTime},toDateTime={toDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Direct Routing Calls"
					]
				}
			}
		},
		{
			"displayName": "From Date Time",
			"name": "fromDateTime",
			"required": true,
			"description": "Usage: fromDateTime={fromDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Direct Routing Calls"
					]
				}
			}
		},
		{
			"displayName": "To Date Time",
			"name": "toDateTime",
			"required": true,
			"description": "Usage: toDateTime={toDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Direct Routing Calls"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Direct Routing Calls"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Direct Routing Calls"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Direct Routing Calls"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Direct Routing Calls"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Direct Routing Calls"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/callRecords/microsoft.graph.callRecords.getPstnCalls(fromDateTime={fromDateTime},toDateTime={toDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Pstn Calls"
					]
				}
			}
		},
		{
			"displayName": "From Date Time",
			"name": "fromDateTime",
			"required": true,
			"description": "Usage: fromDateTime={fromDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Pstn Calls"
					]
				}
			}
		},
		{
			"displayName": "To Date Time",
			"name": "toDateTime",
			"required": true,
			"description": "Usage: toDateTime={toDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Pstn Calls"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Pstn Calls"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Pstn Calls"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Pstn Calls"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Pstn Calls"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Functions"
					],
					"operation": [
						"Communications Call Records Get Pstn Calls"
					]
				}
			}
		},
];
