import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { OfficeRegion } from './common/my-custom'
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        console.log('officeRegion.tokyo :', OfficeRegion.tokyo);
        console.log('officeRegion.nagoya :', OfficeRegion.nagoya);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world ' + OfficeRegion.tokyo,
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
