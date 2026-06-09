import type { INodeProperties } from 'n8n-workflow';

export const agreementAcceptancesAgreementAcceptanceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agreement Acceptances Agreement Acceptance"
					]
				}
			},
			"options": [
				{
					"name": "Agreement Acceptances Agreement Acceptance List Agreement Acceptance",
					"value": "Agreement Acceptances Agreement Acceptance List Agreement Acceptance",
					"action": "Get entities from agreementAcceptances",
					"description": "Get entities from agreementAcceptances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreementAcceptances"
						}
					}
				},
				{
					"name": "Agreement Acceptances Agreement Acceptance Create Agreement Acceptance",
					"value": "Agreement Acceptances Agreement Acceptance Create Agreement Acceptance",
					"action": "Add new entity to agreementAcceptances",
					"description": "Add new entity to agreementAcceptances",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/agreementAcceptances"
						}
					}
				},
				{
					"name": "Agreement Acceptances Agreement Acceptance Delete Agreement Acceptance",
					"value": "Agreement Acceptances Agreement Acceptance Delete Agreement Acceptance",
					"action": "Delete entity from agreementAcceptances",
					"description": "Delete entity from agreementAcceptances",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/agreementAcceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Agreement Acceptances Agreement Acceptance Get Agreement Acceptance",
					"value": "Agreement Acceptances Agreement Acceptance Get Agreement Acceptance",
					"action": "Get entity from agreementAcceptances by key",
					"description": "Get entity from agreementAcceptances by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreementAcceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Agreement Acceptances Agreement Acceptance Update Agreement Acceptance",
					"value": "Agreement Acceptances Agreement Acceptance Update Agreement Acceptance",
					"action": "Update entity in agreementAcceptances",
					"description": "Update entity in agreementAcceptances",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/agreementAcceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /agreementAcceptances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance List Agreement Acceptance"
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
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance List Agreement Acceptance"
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
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance List Agreement Acceptance"
					]
				}
			}
		},
		{
			"displayName": "POST /agreementAcceptances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance Create Agreement Acceptance"
					]
				}
			}
		},
		{
			"displayName": "POST /agreementAcceptances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance Create Agreement Acceptance"
					]
				}
			}
		},
		{
			"displayName": "DELETE /agreementAcceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance Delete Agreement Acceptance"
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
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance Delete Agreement Acceptance"
					]
				}
			}
		},
		{
			"displayName": "GET /agreementAcceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance Get Agreement Acceptance"
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
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance Get Agreement Acceptance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreementAcceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance Update Agreement Acceptance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreementAcceptances/{agreementAcceptance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreement Acceptances Agreement Acceptance"
					],
					"operation": [
						"Agreement Acceptances Agreement Acceptance Update Agreement Acceptance"
					]
				}
			}
		},
];
