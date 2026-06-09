import type { INodeProperties } from 'n8n-workflow';

export const agreementsAgreementAcceptanceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					]
				}
			},
			"options": [
				{
					"name": "Agreements List Acceptances",
					"value": "Agreements List Acceptances",
					"action": "List acceptances",
					"description": "Get the details about the acceptance records for a specific agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/acceptances"
						}
					}
				},
				{
					"name": "Agreements Create Acceptances",
					"value": "Agreements Create Acceptances",
					"action": "Create new navigation property to acceptances for agreements",
					"description": "Create new navigation property to acceptances for agreements",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/acceptances"
						}
					}
				},
				{
					"name": "Agreements Delete Acceptances",
					"value": "Agreements Delete Acceptances",
					"action": "Delete navigation property acceptances for agreements",
					"description": "Delete navigation property acceptances for agreements",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/acceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Get Acceptances",
					"value": "Agreements Get Acceptances",
					"action": "Get acceptances from agreements",
					"description": "Read-only. Information about acceptances of this agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/acceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Update Acceptances",
					"value": "Agreements Update Acceptances",
					"action": "Update the navigation property acceptances in agreements",
					"description": "Update the navigation property acceptances in agreements",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/acceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /agreements/{agreement-id}/acceptances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
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
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
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
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
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
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
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
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
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
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements List Acceptances"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/acceptances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Create Acceptances"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/acceptances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Create Acceptances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Delete Acceptances"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Delete Acceptances"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Get Acceptances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Get Acceptances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Get Acceptances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Update Acceptances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement Acceptance"
					],
					"operation": [
						"Agreements Update Acceptances"
					]
				}
			}
		},
];
