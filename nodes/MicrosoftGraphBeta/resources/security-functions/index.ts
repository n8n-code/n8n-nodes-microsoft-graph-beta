import type { INodeProperties } from 'n8n-workflow';

export const securityFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Functions"
					]
				}
			},
			"options": [
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run",
					"action": "Invoke function run",
					"description": "Invoke function run",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/queries/{{$parameter[\"ediscoveryReviewSetQuery-id\"]}}/microsoft.graph.security.run()"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy",
					"action": "Invoke function asHierarchy",
					"description": "Invoke function asHierarchy",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags/microsoft.graph.security.asHierarchy()"
						}
					}
				},
				{
					"name": "Security Subject Rights Requests Subject Rights Request Get Final Attachment",
					"value": "Security Subject Rights Requests Subject Rights Request Get Final Attachment",
					"action": "Invoke function getFinalAttachment",
					"description": "Invoke function getFinalAttachment",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}/microsoft.graph.getFinalAttachment()"
						}
					}
				},
				{
					"name": "Security Subject Rights Requests Subject Rights Request Get Final Report",
					"value": "Security Subject Rights Requests Subject Rights Request Get Final Report",
					"action": "Invoke function getFinalReport",
					"description": "Invoke function getFinalReport",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}/microsoft.graph.getFinalReport()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries/{ediscoveryReviewSetQuery-id}/microsoft.graph.security.run()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Run"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/microsoft.graph.security.asHierarchy()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy"
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
						"Security Functions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Tags As Hierarchy"
					]
				}
			}
		},
		{
			"displayName": "GET /security/subjectRightsRequests/{subjectRightsRequest-id}/microsoft.graph.getFinalAttachment()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Functions"
					],
					"operation": [
						"Security Subject Rights Requests Subject Rights Request Get Final Attachment"
					]
				}
			}
		},
		{
			"displayName": "GET /security/subjectRightsRequests/{subjectRightsRequest-id}/microsoft.graph.getFinalReport()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Functions"
					],
					"operation": [
						"Security Subject Rights Requests Subject Rights Request Get Final Report"
					]
				}
			}
		},
];
