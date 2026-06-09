import type { INodeProperties } from 'n8n-workflow';

export const threatSubmissionEmailThreatSubmissionPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Email Threat Submission Policy"
					]
				}
			},
			"options": [
				{
					"name": "Threat Submission List Email Threat Submission Policies",
					"value": "Threat Submission List Email Threat Submission Policies",
					"action": "List emailThreatSubmissionPolicies",
					"description": "Get a list of the emailThreatSubmissionPolicy objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/threatSubmission/emailThreatSubmissionPolicies"
						}
					}
				},
				{
					"name": "Threat Submission Create Email Threat Submission Policies",
					"value": "Threat Submission Create Email Threat Submission Policies",
					"action": "Create new navigation property to emailThreatSubmissionPolicies for threatSubmission",
					"description": "Create new navigation property to emailThreatSubmissionPolicies for threatSubmission",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/threatSubmission/emailThreatSubmissionPolicies"
						}
					}
				},
				{
					"name": "Threat Submission Delete Email Threat Submission Policies",
					"value": "Threat Submission Delete Email Threat Submission Policies",
					"action": "Delete navigation property emailThreatSubmissionPolicies for threatSubmission",
					"description": "Delete navigation property emailThreatSubmissionPolicies for threatSubmission",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/threatSubmission/emailThreatSubmissionPolicies/{{$parameter[\"emailThreatSubmissionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Threat Submission Get Email Threat Submission Policies",
					"value": "Threat Submission Get Email Threat Submission Policies",
					"action": "Get emailThreatSubmissionPolicies from threatSubmission",
					"description": "Get emailThreatSubmissionPolicies from threatSubmission",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/threatSubmission/emailThreatSubmissionPolicies/{{$parameter[\"emailThreatSubmissionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Threat Submission Update Email Threat Submission Policies",
					"value": "Threat Submission Update Email Threat Submission Policies",
					"action": "Update the navigation property emailThreatSubmissionPolicies in threatSubmission",
					"description": "Update the navigation property emailThreatSubmissionPolicies in threatSubmission",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/threatSubmission/emailThreatSubmissionPolicies/{{$parameter[\"emailThreatSubmissionPolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /threatSubmission/emailThreatSubmissionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission List Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /threatSubmission/emailThreatSubmissionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Create Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /threatSubmission/emailThreatSubmissionPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Create Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Delete Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Delete Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Get Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Get Email Threat Submission Policies"
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
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Get Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Update Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Email Threat Submission Policy"
					],
					"operation": [
						"Threat Submission Update Email Threat Submission Policies"
					]
				}
			}
		},
];
